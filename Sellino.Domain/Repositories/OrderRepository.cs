using Microsoft.EntityFrameworkCore;
using Sellino.Domain.Context;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Migrations.UserDb;
using Sellino.Domain.Models;

namespace Sellino.Domain.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        OrderDbContext _orderRepository;

        public OrderRepository(OrderDbContext db)
        {
            _orderRepository = db;
        }

        public async Task<int> CreateOrder(Order order)
        {
            await _orderRepository.Orders.AddAsync(order);
            await _orderRepository.SaveChangesAsync();

            return order.OrderId;
        }

        public async Task<List<Order>> GetOrders(int profileId)
        {
            List<Order> orders = await _orderRepository.Orders.Where(x => x.ProfileId == profileId).ToListAsync();

            return orders;
        }
    }
}
