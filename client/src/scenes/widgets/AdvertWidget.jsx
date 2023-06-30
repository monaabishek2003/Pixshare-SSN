import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          SSN-Clock Tower
        </Typography>
        <Typography color={medium}>FAV SPOT</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/ssnct.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      {/* <FlexBetween>
        <Typography color={main}>MikaCosmetics</Typography>
        <Typography color={medium}>mikacosmetics.com</Typography>
      </FlexBetween> */}
      <Typography color={medium} m="0.5rem 0">
        A captivating masterpiece that becomes the heart of our college,
        drawing people in with its enchanting beauty, especially during 
        evenings and nights.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
