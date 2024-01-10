using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Sellino.API.Helpers;
using Sellino.API.Models.Product;
using Sellino.Domain.Models;
using Sellino.Service.Interfaces;
using Sellino.Service.Models;
using System.Text.Json;

namespace Sellino.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly UserHelper _userHelper;
        private readonly IOrderService _orderService;

        public OrderController(UserHelper userHelper, IOrderService orderService)
        {
            _userHelper = userHelper;
            _orderService = orderService;
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("/Orders")]
        public async Task<IActionResult> CreateOrder(CreateOrderModel model)
        {
            int orderId = await _orderService.CreateOrder(model);

            return Ok(orderId);
        }

        [HttpGet]
        [Route("/Orders")]
        public async Task<IActionResult> GetOrders()
        {
            int profileId = _userHelper.GetProfileId();

            if (profileId == 0)
                return BadRequest("Profile was not found.");

            List<OrderModel> orders = await _orderService.GetOrders(profileId);

            // Newest first
            orders = orders.OrderBy(x => x.IsCompleted).ThenByDescending(x => x.OrderId).ToList();

            return Ok(orders);
        }

        [HttpPut]
        [Route("/Orders/{orderId}")]
        public async Task<IActionResult> UpdateOrderComplete(int orderId)
        {
            return Ok(await _orderService.UpdateOrderComplete(orderId));
        }
    }
}
