using AutoMapper;
using Sellino.Domain.Interfaces;
using Sellino.Domain.Models;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;

namespace Sellino.Service.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IProductRepository _productRepository;

        public OrderService(IOrderRepository orderRepository, IProductRepository productRepository)
        {
            _orderRepository = orderRepository;
            _productRepository = productRepository;
        }

        public async Task<int> CreateOrder(CreateOrderModel order)
        {
            Order orderDto = new Order
            {
                OrderToken = Guid.NewGuid(),
                ProductId = order.ProductId,
                ProfileId = order.ProfileId,
                Address = order.Address,
                FullName = order.FullName,
                Amount = order.Amount,
                City = order.City,
                ZipCode = order.ZipCode
            };

            return await _orderRepository.CreateOrder(orderDto);
        }

        public async Task<List<OrderModel>> GetOrders(int profileId)
        {
            List<OrderModel> orderModels = new List<OrderModel>();
            List<Order> orders = await _orderRepository.GetOrders(profileId);

            if (orders.Any())
            {
                foreach(Order order in orders)
                {
                    Product orderedProduct = await _productRepository.GetProduct(order.ProductId);
                    OrderModel orderModel = new OrderModel
                    {
                        Address = order.Address,
                        Amount = order.Amount,
                        FullName = order.FullName,
                        City = order.City,
                        ZipCode = order.ZipCode,
                        IsCompleted = order.IsCompleted,
                        OrderId = order.OrderId,
                        OrderToken = order.OrderToken,
                        ProductId = order.ProductId,
                        ProfileId = order.ProfileId,
                        FullPrice = orderedProduct.Price * order.Amount,
                        ProductName = orderedProduct.Name
                    };

                    orderModels.Add(orderModel);
                }
            }

            return orderModels;
        }

        public async Task<bool> UpdateOrderComplete(int orderId)
        {
            return await _orderRepository.UpdateOrderComplete(orderId);
        }
    }
}
