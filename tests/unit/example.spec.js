import { shallowMount } from '@vue/test-utils'
import AccueilView from '@/views/AccueilView.vue'

describe('App.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Test'
    const wrapper = shallowMount(AccueilView, {
    })
    expect(wrapper.html()).toContain('<h2>Une carte dédiée à la pêche</h2><span>Rivières, lacs, ainsi que mers et océans contrastés grâce à une couleur bleu vive</span>')
    expect(wrapper.html()).toContain('<h2>Vos spots préférés avec vos prises</h2><span>Placez vos propre points et consultez les à votre guise</span>')
  })
})
