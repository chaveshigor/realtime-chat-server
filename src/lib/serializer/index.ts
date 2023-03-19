import Entity from "../../shared/types/entity";

class ApplicationSerializer {
  attributes = [] as String[];
  entity;

  constructor(entity: any) {
    this.entity = entity;
  }
  
  public setAttributes(attributes: String[]): void {
    this.attributes = attributes;
  }

  public serialize<SerializedResponse>(): SerializedResponse {
    const entity = this.entity;
    console.log(this.setAttributesToRender(entity))
    return {
      id: entity.id,
      type: typeof entity,
      attributes: this.setAttributesToRender(entity)
    } as SerializedResponse;
  }

  public setAttributesToRender<I extends Object>(entity: I): Object {
    if(this.attributes.length === 0) return entity;

    const attributesToKeep = this.attributes;
    Object.keys(entity).forEach((value: String) => {
      if(!attributesToKeep.includes(value)) {
        delete entity[value as keyof typeof entity];
      };
    });

    return entity;
  }
}

export default ApplicationSerializer;

