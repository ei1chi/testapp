import m from 'mithril';

let User = {
  name: 'aho',
  changeName: name => {
    User.name = name;
  },
};

const Component = {
  view: v => {
    return m('div', [
      m('input[type=text]', {
        oninput: m.withAttr('value', User.changeName),
        value: User.name,
      }),
      m('h1', User.name),
    ]);
  },
};

const run = () => {
  m.mount(document.body, Component);
};
run();
