// @declaration: true

// Bug 45907
class Foo1 {
  /** instance bar */
  readonly bar1 = 'instance Foo1';

  constructor() { }
}

class Foo2 extends Foo1 {
  static readonly bar1 = 'class Foo2';
}

class Foo3 {
  /** class bar */
  static readonly bar2: string = 'class Foo3';

  /** instance bar */
  readonly bar2 = 'instance Foo3';

  constructor() {
  }
}

class Foo4 extends Foo3 {
  static readonly bar2 = 'class Foo4';
}