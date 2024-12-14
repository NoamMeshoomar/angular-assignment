export interface IProcess {
    superClaim: {
        superClaimNum: number;
        superClaimStatus: ICodeValue;
    };
    insured: {
        address: {
            cityName: string;
            streetName: string;
        };
        identityType: number;
        age: number;
        lastName: string;
        identity: number;
        firstName: string;
    };
    contactPersons: IContact[];
}

export interface IContact {
    id: number;
    deliveryFlag: boolean;
    type: ICodeValue;
    name: string;
    phoneNumber: number;
    email: string;
    address: string;
}

export interface ICodeValue {
    code: number;
    value: string;
}