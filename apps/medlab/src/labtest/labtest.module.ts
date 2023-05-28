import { Module } from "@nestjs/common";
import { LabtestModuleBase } from "./base/labtest.module.base";
import { LabtestService } from "./labtest.service";
import { LabtestController } from "./labtest.controller";
import { LabtestResolver } from "./labtest.resolver";

@Module({
  imports: [LabtestModuleBase],
  controllers: [LabtestController],
  providers: [LabtestService, LabtestResolver],
  exports: [LabtestService],
})
export class LabtestModule {}
