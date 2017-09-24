export class Furniture {
  public name: string;
  public image: string;

  constructor(name: string, image: string) {
    this.name = name;
    this.image = '../../assets/images/furniture/' + image;
  }
}

export class Corner extends Furniture {

  constructor(name: string, image: string) {
    image = 'corners/' + image;
    super(name, image);
  }
}

export class Sofa extends Furniture {

  constructor(name: string, image: string) {
    image = 'sofas/' + image;
    super(name, image);
  }
}
export class Chair extends Furniture {

  constructor(name: string, image: string) {
    image = 'chairs/' + image;
    super(name, image);
  }
}
