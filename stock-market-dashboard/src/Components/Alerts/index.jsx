import React, { useState } from 'react'
import { mockData } from '../../mockedData.js';
import AlertsHeader from '../AlertsHeader/index.jsx';
export default function Alerts({ className }) {
  const [alerts, setAlerts] = useState(mockData);
  return (
    <div className={className}>
      <div className="p-4">
        <AlertsHeader />
        <ul className="space-y-4">
          {alerts.map(alert => (
            <li key={alert.id} className="p-4 border rounded-lg flex flex-col justify-center items-center">
              <div className="flex flex-col items-center">
                <p className="text-xl font-semibold">{alert.symbol} - ${alert.price}</p>
                <p className={`text-sm ${alert.direction === "increased" ? "text-green-500" : "text-red-500"}`}>
                  Rate {alert.direction} by {alert.rateChange}% - {alert.riskLevel}
                </p>
                <p className="text-sm text-gray-500">
                  Industry: {alert.industry}, Market Cap: {alert.marketCap}
                </p>
                <p className="text-sm text-gray-500">
                  Strategy: {alert.strategy}, Assets: {alert.assets}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
