import { AuthResolver, CrudTypeormResolver } from '@app/crud-typeorm';
import { Resolver } from '@nestjs/graphql';
import { Admin } from './entities/admin.type';
import { AdminService } from './admin.service';
@Resolver((type) => Admin)
export class AdminResolver extends AuthResolver(Admin) {
  constructor(private adminService: AdminService) {
    super(adminService);
  }
}
