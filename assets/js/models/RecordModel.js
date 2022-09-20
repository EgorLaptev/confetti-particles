import BaseModel from "./BaseModel";

export default class RecordModel {
    save(points) {
        BaseModel.fetchData('record', 'POST', points)
    }
    async load() {
        return await BaseModel.fetchData('record')
    }
}