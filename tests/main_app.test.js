/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import MainApp from '@/views/main_app.vue' // Adjust the path if necessary

describe('main_app.vue', () => {
  it('renders the correct title', () => {
    const wrapper = mount(MainApp)
    expect(wrapper.text()).toContain('Budget Tracker')
  })

  it('adds a transaction and updates the balance', async () => {
    const wrapper = mount(MainApp)

    // Simulate input for adding an income
    await wrapper.find('input[placeholder="Description"]').setValue('Salary')
    await wrapper.find('input[placeholder="Amount"]').setValue(1000)
    await wrapper.find('select').setValue('income')
    await wrapper.find('form').trigger('submit.prevent')

    // Verify the transaction is added
    const transactions = wrapper.findAll('.txt-green')
    expect(transactions.length).toBe(1)
    expect(transactions[0].text()).toContain('Salary: +$1000')

    // Verify the balance is updated
    expect(wrapper.find('.total').text()).toContain('Total Balance: $1000')
  })

  it('adds an expense and decreases the balance', async () => {
    const wrapper = mount(MainApp)

    // Simulate input for adding an expense
    await wrapper.find('input[placeholder="Description"]').setValue('Groceries')
    await wrapper.find('input[placeholder="Amount"]').setValue(200)
    await wrapper.find('select').setValue('expense')
    await wrapper.find('form').trigger('submit.prevent')

    // Verify the transaction is added
    const transactions = wrapper.findAll('.txt-red')
    expect(transactions.length).toBe(1)
    expect(transactions[0].text()).toContain('Groceries: -$200')

    // Verify the balance is updated
    expect(wrapper.find('.total').text()).toContain('Total Balance: -$200')
  })
})
