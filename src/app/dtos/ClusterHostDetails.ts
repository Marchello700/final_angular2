export interface IPhysicalMemory {
    value: number;
    unit: number;
}

export class PhysicalMemory implements IPhysicalMemory {
    value: number;
    unit: number;
    constructor(data: any) {
        this.value = data.value;
        this.unit = data.unit;
    }
}

export interface IClusterHostDetails {
    hostId: number;
    clusterId: number;
    name: string;
    state: number;
    processorCount: number;
    physicalMemory: IPhysicalMemory;
}

export class ClusterHostDetails implements IClusterHostDetails {
    hostId: number;
    clusterId: number;
    name: string;
    state: number;
    processorCount: number;
    physicalMemory: IPhysicalMemory;
    constructor(data: any) {
        this.hostId = data.hostId;
        this.clusterId = data.clusterId;
        this.name = data.name;
        this.state = data.state;
        this.processorCount = data.processorCount;
        this.physicalMemory = new PhysicalMemory(data.physicalMemory);
    }
}