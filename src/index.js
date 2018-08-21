import m from 'mithril';
import 'spectre.css';

let User = {
  name: 'aho',
  changeName: name => {
    User.name = name;
  },
};

const Component = {
  view: v => [
    m('div', [
      m('input[type=text]', {
        oninput: m.withAttr('value', User.changeName),
        value: User.name,
      }),
      m('button', 'button1'),
      m('h1', User.name),
    ]),
  ],
};

const run = () => {
  m.mount(document.body, Component);
};
run();
