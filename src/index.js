import m from 'mithril';

let User = {
  name: 'aho',
  changeName: name => {
    User.name = name;
  },
  count: 0,
};

class Param {
  constructor(name, atk) {
    this.name = name;
    this.attack_pt = atk;
  }
}

const Params = [
  new Param('Taro', 100),
  new Param('Jiro', 500),
  new Param('Hanako', 50),
];

const Component = {
  view: v => [
    m('div', [
      m('input[type=text]', {
        oninput: m.withAttr('value', User.changeName),
        value: User.name,
      }),
      m(
        'button',
        {
          onclick: () => {
            User.count++;
          },
        },
        'push',
      ),
      m('h1', User.name + User.count),
    ]),
    m('table', {border: 1}, [
      m('thead', [m('th', 'name'), m('th', 'attack_pt')]),
      m(
        'tbody',
        Params.map(p => [m('tr', [m('td', p.name), m('td', p.attack_pt)])]),
      ),
    ]),
    m('hr'),
    m(
      'p',
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ),
  ],
};

const run = () => {
  m.mount(document.body, Component);
};
run();
