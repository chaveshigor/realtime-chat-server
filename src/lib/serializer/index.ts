import Entity from '../../shared/types/entity';

class ApplicationSerializer {
  attributes = [] as string[];

  entity;

  constructor(entity: Entity) {
    this.entity = entity;
  }

  public setAttributes(attributes: string[]): void {
    this.attributes = attributes;
  }

  public serialize<SerializedResponse>(): SerializedResponse {
    const { entity } = this;
    return {
      id: entity.id,
      type: entity.constructor.name.toLowerCase(),
      attributes: this.setAttributesToRender(entity),
    } as SerializedResponse;
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public setAttributesToRender<I extends Object>(entity: I): Object {
    if (this.attributes.length === 0) return entity;

    const attributesToKeep = this.attributes;
    Object.keys(entity).forEach((value: string) => {
      if (!attributesToKeep.includes(value)) {
        // eslint-disable-next-line no-param-reassign
        delete entity[value as keyof typeof entity];
      }
    });

    return entity;
  }
}

export default ApplicationSerializer;
