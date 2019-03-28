export interface Root {
    certificates: Certificate[];
}

export interface Certificate {

    name: string;
    issueOrg: string;
    issueDate: string;
    credentialUrl: string;
}

