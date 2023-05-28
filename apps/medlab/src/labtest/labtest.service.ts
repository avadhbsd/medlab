import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LabtestServiceBase } from "./base/labtest.service.base";

@Injectable()
export class LabtestService extends LabtestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
