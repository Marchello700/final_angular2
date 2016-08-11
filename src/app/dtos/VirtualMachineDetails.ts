export interface IVirtualMemory {
    value: number;
    unit: number;
}

export class VirtualMemory implements IVirtualMemory {
    value: number;
    unit: number;
    constructor(data: any) {
        this.value = data.value;
        this.unit = data.unit;
    }
}

export interface IVirtualMachineDetails {
    virtualMachineId: number;
    hostId: number;
    name: string;
    state: number;
    virtualProcessorCount: number;
    virtualMemory: IVirtualMemory;
}

export class VirtualMachineDetails implements IVirtualMachineDetails {
    virtualMachineId: number;
    hostId: number;
    name: string;
    state: number;
    virtualProcessorCount: number;
    virtualMemory: IVirtualMemory;
    constructor(data: any) {
        this.virtualMachineId = data.virtualMachineId;
        this.hostId = data.hostId;
        this.name = data.name;
        this.state = data.state;
        this.virtualProcessorCount = data.virtualProcessorCount;
        this.virtualMemory = new VirtualMemory(data.virtualMemory);
        // this.virtualMemory = data.virtualMemory;
        // this.virtualMemory = data.virtualMemory;
    }
}