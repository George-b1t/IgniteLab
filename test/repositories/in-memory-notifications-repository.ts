import { Notification } from "../../src/app/entities/notification";
import { NotificationsRepository } from "../../src/app/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
