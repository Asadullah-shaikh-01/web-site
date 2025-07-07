import ServiceCards from "@/components/ServiceWeb";
import ServiceHero from "@/components/ServiceHero";
import ServiceInformation from "@/components/ServiceInformation";
import React from "react";
import ServiceWeb from "@/components/ServiceWeb";
import ServiceFieldReports from "@/components/ServiceFieldReports";
import ServiceLms from "@/components/ServiceLms";
import ServiceCmms from "@/components/ServiceCmms";
import ServiceSms from "@/components/ServiceSms";
import ServiceSaasDevelopment from "@/components/ServiceSaasDevelopment";
import ServiceAppDevelopment from "@/components/ServiceAppDevelopment";
import ErpSolution from "@/components/ErpSolution";
import CrmSolution from "@/components/CrmSolution";
import BlockchainDevelopment from "@/components/BlockchainDevelopment";
import ServiceEndSection from "@/components/ServiceEndSection";

function page() {
  return (
    <>
      <ServiceHero />
      <ServiceInformation />
      <ServiceWeb />
      <ServiceFieldReports />
      <ServiceLms />
      <ServiceCmms />
      <ServiceSms />
      <ServiceSaasDevelopment />
      <ServiceAppDevelopment />
      <ErpSolution />
      <CrmSolution />
      <BlockchainDevelopment />
      <ServiceEndSection />
    </>
  );
}

export default page;
