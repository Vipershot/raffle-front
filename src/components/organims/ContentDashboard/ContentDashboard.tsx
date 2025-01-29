import { useEffect, useState } from "react";
// import { AppSection } from '../../atoms/AppSection/AppSection'
import { CardProduct } from "../../molecules/CardProduct/CardProduct";
import { getMostRecent } from "../../../services/awards";
import { IAward } from "../../../interface/awards";
import { getProfile } from "../../../services/auth";
import AppModal from "../../atoms/AppModal/AppModal";
import { Terms } from "./Value";
import { AppButton } from "../../atoms/AppButton/AppButton";

import { Loader } from "../../atoms/Loader/Loader";
import { LayoutContent } from "../../molecules/LayoutContent/LayoutContent";
import { celebration } from "../../../utils/celebration";

export const ContentDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [mostRecent, setMostRecent] = useState<IAward[]>([]);
  // const [lowestPrice, setLowestPrice] = useState<IAward[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsModalOpen(false);
    setIsChecked(false);
  };

  const loadAwards = async () => {
    setLoading(true);
    const mostRecent = await getMostRecent();
    // const lowestPrice = await getLowestPrice()
    setMostRecent(mostRecent);
    // setLowestPrice(lowestPrice)
    setLoading(false);
  };
  useEffect(() => {
    loadAwards();
    getProfile().then();
    localStorage.removeItem('tickets')
    localStorage.removeItem('award')
  }, []);

  const checkCelebrationDate = () => {
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);
  
    const upcomingCelebrations = celebration.filter((celebration) => {
      const [day, month] = celebration.date.split("-");
      const celebrationDate = new Date(today.getFullYear(), parseInt(month) - 1, parseInt(day));
      return celebrationDate >= today && celebrationDate <= thirtyDaysFromNow;
    });
  
    if (upcomingCelebrations.length > 0) {
      const closestCelebration = upcomingCelebrations.reduce((prev, curr) => {
        const prevDate = new Date(today.getFullYear(), parseInt(prev.date.split("-")[1]) - 1, parseInt(prev.date.split("-")[0]));
        const currDate = new Date(today.getFullYear(), parseInt(curr.date.split("-")[1]) - 1, parseInt(curr.date.split("-")[0]));
        return currDate < prevDate ? curr : prev;
      });
      return closestCelebration;
    }
  
    return null;
  };
  
  const closestCelebration = checkCelebrationDate();
  
  const layoutContentTitle = closestCelebration
    ? `Rifa - ${closestCelebration.name}`
    : "Raffle Rifa";  
  

  return (
    <div className="flex flex-col gap-y-10 sm:px-0">
      {loading ? (
        <Loader />
      ) : (
        <>
          <LayoutContent title={layoutContentTitle} loading={loading} grid>
            {mostRecent.map(
              ({
                title,
                totalTickets,
                ticketPrice,
                description,
                endDate,
                createdAt,
                cover,
                id,
              }) => (
                <CardProduct
                  totalTickets={totalTickets}
                  description={`${title} - ${description}`}
                  ticketPrice={ticketPrice}
                  endDate={endDate}
                  createdAt={createdAt}
                  cover={cover}
                  id={id}
                  key={id}
                />
              )
            )}
          </LayoutContent>
          {/* <AppSection loading={loading} title="Más recientes" link="/most-recent">
                {mostRecent.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
                    totalTickets={Number(totalTickets)} 
                    description={`${title} - ${description}`} 
                    ticketPrice={ticketPrice} 
                    endDate={endDate} 
                    createdAt={createdAt}
                    cover={cover}
                    id={id}
                    key={id}
                />)}
            
        </AppSection>
        <AppSection loading={loading} title="Mejores precios" link="/best-prices">
        {lowestPrice.map(({title,totalTickets, ticketPrice, description, endDate,createdAt, cover, id}) => <CardProduct 
                    totalTickets={totalTickets} 
                    description={`${title} - ${description}`} 
                    ticketPrice={ticketPrice} 
                    endDate={endDate} 
                    createdAt={createdAt}
                    cover={cover}
                    id={id}
                    key={id}

                />)}
            
        </AppSection> */}

          <AppModal open={isModalOpen} title={"Términos y condiciones"}>
            <div className="space-y-4 p-1">
              <p className="text-dark text-[12px]">
                Por favor lea atentamente nuestros términos y condiciones.
              </p>
              <Terms />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => {
                    setIsChecked(e.target.checked);
                    setTermsAccepted(e.target.checked);
                  }}
                />
                <span className="text-[12px]">
                  Acepto términos y condiciones
                </span>
              </label>

              <AppButton
                size="full"
                onClick={() => {
                  handleCloseModal();
                }}
                title="Acepto terminos y condiciones"
                disabled={!termsAccepted}
              />
            </div>
          </AppModal>
        </>
      )}
    </div>
  );
};
