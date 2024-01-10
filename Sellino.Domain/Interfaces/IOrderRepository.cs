using Sellino.Domain.Models;

namespace Sellino.Domain.Interfaces
{
    public interface IOrderRepository
    {
        Task<int> CreateOrder(Order order);
        Task<List<Order>> GetOrders(int profileId);
        Task<bool> UpdateOrderComplete(int orderId);
    }
}
