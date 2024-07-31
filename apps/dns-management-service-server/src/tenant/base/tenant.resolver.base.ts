/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Tenant } from "./Tenant";
import { TenantCountArgs } from "./TenantCountArgs";
import { TenantFindManyArgs } from "./TenantFindManyArgs";
import { TenantFindUniqueArgs } from "./TenantFindUniqueArgs";
import { CreateTenantArgs } from "./CreateTenantArgs";
import { UpdateTenantArgs } from "./UpdateTenantArgs";
import { DeleteTenantArgs } from "./DeleteTenantArgs";
import { DnsRecordFindManyArgs } from "../../dnsRecord/base/DnsRecordFindManyArgs";
import { DnsRecord } from "../../dnsRecord/base/DnsRecord";
import { Account } from "../../account/base/Account";
import { TenantService } from "../tenant.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Tenant)
export class TenantResolverBase {
  constructor(
    protected readonly service: TenantService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async _tenantsMeta(
    @graphql.Args() args: TenantCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tenant])
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "any",
  })
  async tenants(@graphql.Args() args: TenantFindManyArgs): Promise<Tenant[]> {
    return this.service.tenants(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tenant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "read",
    possession: "own",
  })
  async tenant(
    @graphql.Args() args: TenantFindUniqueArgs
  ): Promise<Tenant | null> {
    const result = await this.service.tenant(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tenant)
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "create",
    possession: "any",
  })
  async createTenant(@graphql.Args() args: CreateTenantArgs): Promise<Tenant> {
    return await this.service.createTenant({
      ...args,
      data: {
        ...args.data,

        account: args.data.account
          ? {
              connect: args.data.account,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Tenant)
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "update",
    possession: "any",
  })
  async updateTenant(
    @graphql.Args() args: UpdateTenantArgs
  ): Promise<Tenant | null> {
    try {
      return await this.service.updateTenant({
        ...args,
        data: {
          ...args.data,

          account: args.data.account
            ? {
                connect: args.data.account,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tenant)
  @nestAccessControl.UseRoles({
    resource: "Tenant",
    action: "delete",
    possession: "any",
  })
  async deleteTenant(
    @graphql.Args() args: DeleteTenantArgs
  ): Promise<Tenant | null> {
    try {
      return await this.service.deleteTenant(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DnsRecord], { name: "dnsRecords" })
  @nestAccessControl.UseRoles({
    resource: "DnsRecord",
    action: "read",
    possession: "any",
  })
  async findDnsRecords(
    @graphql.Parent() parent: Tenant,
    @graphql.Args() args: DnsRecordFindManyArgs
  ): Promise<DnsRecord[]> {
    const results = await this.service.findDnsRecords(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Account, {
    nullable: true,
    name: "account",
  })
  @nestAccessControl.UseRoles({
    resource: "Account",
    action: "read",
    possession: "any",
  })
  async getAccount(@graphql.Parent() parent: Tenant): Promise<Account | null> {
    const result = await this.service.getAccount(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}