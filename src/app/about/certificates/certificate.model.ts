

export interface Root {
    certificates: Certificate[];
}

export interface Certificate {
      id: string;
    name: string;
    issueOrg: string;
    issueDate: string;
    credentialUrl: string;
}




