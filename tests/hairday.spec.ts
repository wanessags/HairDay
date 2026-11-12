import { test, expect, type Page } from "@playwright/test";

const URL = "http://localhost:5173/";
const DATA = "2026-12-15";
const OUTRA_DATA = "2026-12-16";

async function cadastrar(
  page: Page,
  nome: string,
  horario: string,
  data = DATA,
) {
  await page.getByLabel("Data", { exact: true }).fill(data);

  await page
    .getByRole("button", {
      name: horario,
      exact: true,
    })
    .click();

  await page.getByRole("textbox", { name: "Cliente", exact: true }).fill(nome);

  await page
    .getByRole("button", {
      name: "Agendar",
      exact: true,
    })
    .click();

  await expect(page.getByRole("status")).toHaveText(
    "Agendamento realizado com sucesso!",
  );
}

function agendamento(page: Page, nome: string) {
  return page.locator(".appointment-item").filter({ hasText: nome });
}

async function filtrarData(page: Page, data: string) {
  const filtro = page.locator(".date-filter input[type='date']");

  await expect(filtro).toBeVisible();
  await filtro.fill(data);
}

test.describe("HairDay - Testes funcionais", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test("01 - Deve cadastrar e excluir um agendamento", async ({ page }) => {
    await cadastrar(page, "Maria Silva", "09:00");

    await expect(agendamento(page, "Maria Silva")).toBeVisible();

    await page
      .getByRole("button", {
        name: "Excluir agendamento de Maria Silva às 09:00",
      })
      .click();

    await expect(agendamento(page, "Maria Silva")).toHaveCount(0);
  });

  test("02 - Deve exigir o nome do cliente", async ({ page }) => {
    await page.getByLabel("Data", { exact: true }).fill(DATA);

    await page
      .getByRole("button", {
        name: "10:00",
        exact: true,
      })
      .click();

    await page
      .getByRole("button", {
        name: "Agendar",
        exact: true,
      })
      .click();

    await expect(page.getByText("Informe o nome do cliente.")).toBeVisible();

    await expect(page.getByRole("status")).toHaveCount(0);
  });

  test("03 - Deve exigir um horário", async ({ page }) => {
    await page.getByLabel("Data", { exact: true }).fill(DATA);

    await page.getByLabel("Cliente").fill("Carlos Santos");

    await page
      .getByRole("button", {
        name: "Agendar",
        exact: true,
      })
      .click();

    await expect(page.getByText("Selecione um horário.")).toBeVisible();

    await expect(agendamento(page, "Carlos Santos")).toHaveCount(0);
  });

  test("04 - Deve exigir uma data", async ({ page }) => {
    await page.getByLabel("Data", { exact: true }).fill("");

    await page.getByLabel("Cliente").fill("Fernanda Costa");

    await page
      .getByRole("button", {
        name: "10:00",
        exact: true,
      })
      .click();

    await page
      .getByRole("button", {
        name: "Agendar",
        exact: true,
      })
      .click();

    await expect(page.getByText("Selecione uma data.")).toBeVisible();

    await expect(agendamento(page, "Fernanda Costa")).toHaveCount(0);
  });

  test("05 - Deve filtrar agendamentos por data", async ({ page }) => {
    await cadastrar(page, "Ana Oliveira", "14:00");

    await expect(agendamento(page, "Ana Oliveira")).toBeVisible();

    await filtrarData(page, OUTRA_DATA);

    await expect(agendamento(page, "Ana Oliveira")).toHaveCount(0);

    await filtrarData(page, DATA);

    await expect(agendamento(page, "Ana Oliveira")).toBeVisible();
  });

  test("06 - Deve organizar os agendamentos por período", async ({ page }) => {
    await cadastrar(page, "Joao Silva", "10:00");
    await cadastrar(page, "Beatriz Lima", "16:00");
    await cadastrar(page, "Pedro Costa", "20:00");

    const manha = page.locator(".period-section").filter({ hasText: "Manhã" });

    const tarde = page.locator(".period-section").filter({ hasText: "Tarde" });

    const noite = page.locator(".period-section").filter({ hasText: "Noite" });

    await expect(manha.getByText("Joao Silva")).toBeVisible();

    await expect(tarde.getByText("Beatriz Lima")).toBeVisible();

    await expect(noite.getByText("Pedro Costa")).toBeVisible();
  });

  test("07 - Deve ordenar os horários cronologicamente", async ({ page }) => {
    await cadastrar(page, "Lucas Ferreira", "12:00");
    await cadastrar(page, "Mariana Souza", "09:00");
    await cadastrar(page, "Rafael Lima", "11:00");

    const linhas = page.locator(".appointment-item").filter({
      hasText: /Lucas Ferreira|Mariana Souza|Rafael Lima/,
    });

    await expect(linhas).toHaveCount(3);

    const textos = await linhas.allTextContents();

    expect(textos[0]).toContain("09:00");
    expect(textos[0]).toContain("Mariana Souza");

    expect(textos[1]).toContain("11:00");
    expect(textos[1]).toContain("Rafael Lima");

    expect(textos[2]).toContain("12:00");
    expect(textos[2]).toContain("Lucas Ferreira");
  });

  test("08 - Deve excluir somente o agendamento selecionado", async ({
    page,
  }) => {
    await cadastrar(page, "Cliente Um", "09:00");
    await cadastrar(page, "Cliente Dois", "10:00");
    await cadastrar(page, "Cliente Tres", "11:00");

    await expect(page.locator(".appointment-item")).toHaveCount(3);

    await page
      .getByRole("button", {
        name: "Excluir agendamento de Cliente Dois às 10:00",
      })
      .click();

    await expect(agendamento(page, "Cliente Dois")).toHaveCount(0);

    await expect(agendamento(page, "Cliente Um")).toBeVisible();

    await expect(agendamento(page, "Cliente Tres")).toBeVisible();

    await expect(page.locator(".appointment-item")).toHaveCount(2);
  });

  test("09 - Deve funcionar em tela mobile", async ({ page }) => {
    await page.setViewportSize({
      width: 390,
      height: 844,
    });

    await expect(
      page.getByRole("button", {
        name: "Agendar",
        exact: true,
      }),
    ).toBeVisible();

    await cadastrar(page, "Cliente Mobile", "09:00");

    await expect(agendamento(page, "Cliente Mobile")).toBeVisible();

    const possuiRolagemHorizontal = await page.evaluate(() => {
      return (
        document.documentElement.scrollWidth >
        document.documentElement.clientWidth + 1
      );
    });

    expect(possuiRolagemHorizontal).toBe(false);
  });
});
