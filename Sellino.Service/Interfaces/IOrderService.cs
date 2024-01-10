using Sellino.Domain.Models;

namespace Sellino.Service.Interfaces
{
    public interface IOrderService
    {
        Task<int> CreateOrder(CreateOrderModel order);
        Task<List<OrderModel>> GetOrders(int profileId);
    }
}
