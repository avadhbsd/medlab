import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LabtestService } from "./labtest.service";
import { LabtestControllerBase } from "./base/labtest.controller.base";

@swagger.ApiTags("labtests")
@common.Controller("labtests")
export class LabtestController extends LabtestControllerBase {
  constructor(
    protected readonly service: LabtestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
