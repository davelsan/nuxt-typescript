import { shallowMount } from '@vue/test-utils';

import Hello from '@/components/hello.vue';

describe('Hello', () => {
  it('renders a message', () => {
    const message = 'Hello, Nuxt + TypeScript';

    const wrapper = shallowMount(Hello, {
      propsData: {
        message
      }
    });

    expect(wrapper.find('.message').text()).toBe(message.toUpperCase());
  });
});
