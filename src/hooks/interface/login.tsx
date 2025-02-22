import { LogInInfo } from "../../types/stateLogin";

export interface LogInAdminNameStore  {
    nameAdmin: LogInInfo,
    setNameAdmin: (n:LogInInfo) => void;
}

export interface LogInAdminPassStore  {
passAdmin: LogInInfo,
    setPassAdmin: (n:LogInInfo) => void;
}