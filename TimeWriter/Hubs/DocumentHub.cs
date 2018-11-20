using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimeWriter.Hubs
{
	public class DocumentHub : Hub
	{
		public async Task SendMessage(string message)
		{
			await this.Clients.All.SendAsync("AddMessage", message);
		}
	}
}
