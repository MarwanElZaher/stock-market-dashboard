import React, { useState } from 'react'
import { mockData } from '../../mockedData.js';
import AlertsHeader from '../AlertsHeader/index.jsx';
import AlertsCell from '../AlertsCell/index.jsx';
import dollarTicket from '../../icons/dollarTicket.svg'
import rateIcon from '../../icons/rateIcon.svg'
import riskIcon from '../../icons/riskIcon.svg'
import stockIcon from '../../icons/stockIcon.svg'

export default function Alerts({ className }) {
  const [alerts, setAlerts] = useState(mockData);
  return (
    <div className={className}>
      <div className="p-4">
        <AlertsHeader />
        <ul className="space-y-4">
          {alerts.map(alert => (
            <li key={alert?.id} className="p-4 border rounded-lg flex flex-col justify-center items-center">
              <div className="flex flex-row items-center">
                <AlertsCell hasVerticalLine={false} iconSrc={dollarTicket} data={alert?.symbol} />
                <AlertsCell hasVerticalLine={true} iconSrc={stockIcon} data={alert?.price} />
                <AlertsCell hasVerticalLine={true} iconSrc={rateIcon} alertDirection={alert?.direction} data={`${alert?.rateChange}%`} />
                <AlertsCell hasVerticalLine={true} iconSrc={riskIcon} data={alert?.riskLevel} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
