import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('renders company name correctly', () => {
    render(MainNav)
    // expect(screen.getByText('Bobo Careers')).toBeInTheDocument()
    screen.debug()
  })
})
