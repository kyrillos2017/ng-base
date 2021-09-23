import { SystemRoles } from "../authorization/model/authorization.config";
import { PermissionModel } from "../authorization/model/authorization.model";

export const REQUESTS_MODULE_PERMISSIONS : PermissionModel[] = [
  {
    name: "CREATE_TEST",
    roles: [SystemRoles.Master]
  }
]
