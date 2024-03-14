import { test, expect } from '@playwright/test';

const TODO_ITEMS = ['laundry', 'homework', 'meal prep'];

test.beforeEach(async ({ page }) => {
	await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Todo Page', () => {
	test('Add new todo to the todo list', async ({ page }) => {
		const newTodo = page.getByPlaceholder('What needs to be done?');

		await newTodo.fill(TODO_ITEMS[0]);
		await newTodo.press('Enter');

		await expect(page.getByText(TODO_ITEMS[0])).toBeVisible();
	});
});
