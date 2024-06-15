import { mountRemoteComponent } from "@/utils/loadComponent";

const PromotionBanner = () => {
  return mountRemoteComponent({
    module: "banner", component: "Banner", props: {
    }
  });
}

export default PromotionBanner;