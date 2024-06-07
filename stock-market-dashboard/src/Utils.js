import HealthcareIcon from './icons/HealthCare.svg';
import MaterialsIcon from "./icons/Materials.svg";
import EnergyIcon from "./icons/Energy.svg";
import ConsumerDiscretionaryIcon from   "./icons/ConsumerDesc.svg";
import ConsumerStapiesIcon from   "./icons/ConsumerStap.svg";
import RealEstateIcon from   "./icons/RealEstate.svg";
import ItIcon from   "./icons/It.svg";
import CommunicationIcon from   "./icons/Communication.svg";
import IndustriesIcon from   "./icons/Industries.svg";
import UtilitiesIcon from   "./icons/Utilies.svg";
import FinancialsIcon from "./icons/Financials.svg";

export default function getImage(option) {
    const key = option.toLowerCase().replace(/\s/g, '');
    switch(key) {
        case 'healthcare':
            return HealthcareIcon;
        case 'materials':
            return MaterialsIcon;
        case 'consumerdiscretionary':
            return ConsumerDiscretionaryIcon;
        case 'consumerstapies':
            return ConsumerStapiesIcon;
        case 'realestate':
            return RealEstateIcon;
        case 'it':
            return ItIcon;
        case 'communication':
            return CommunicationIcon;
        case 'industries':
            return IndustriesIcon;
        case 'utilities':
            return UtilitiesIcon;
        case 'financials':
            return FinancialsIcon;
        case 'energy':
            return EnergyIcon;
    
        default:
            return null;
    }
} 