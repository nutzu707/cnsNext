import PageTitle from "@/app/components/pagetitle/pagetitle";
import PageBody from "@/app/components/pagebody/pagebody";
import Footer from "@/app/components/footer/footer";

export default function ManagementDocumente() {
    return (
        <div>
            <PageBody>
                <PageTitle text="PREZENTARE"></PageTitle>
                <div className="w-full h-[calc(100vw*9/16)  lg:h-[400px] mt-16 lg:mt-32 flex flex-col lg:flex-row lg:mb-0 -mb-10">
                    <div className="w-full h-[calc(100vw*9/16) lg:min-w-[650px]">
                        <img className="w-full h-[calc(100vw*9/16) lg:min-w-[650px] lg:h-[365px] rounded-2xl shadow-2xl" src="/websiteUI/poza-cladire-cns-vech.png" alt="Poza Cladire CNS" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-6xl text-center lg:text-left ml-0 lg:ml-10 font-bold mt-5 lg:-mt-5 ">SCURT ISTORIC</h1>
                        <h1 className="text-xl ml-0 lg:ml-10 mt-2 lg:text-left text-justify">Începuturile celui mai vechi liceu din Zalău, din judeţul Sălaj, îşi au rădăcinile în prima jumătate a secolului al XVII-lea: în anul 1646, la Zalău deja funcţiona un gimnaziu reformat (calvinist). Din acest an este cunoscut numele primului rector al instituţiei, precum şi numele elevilor înscrişi la cursurile superioare. Aceşti elevi au fost înscrişi în matricola şcolii şi prin aceasta, ei se angajau să respecte legile şcolii. În primele secole, limba de predare a fost limba latină, apoi limba maghiară, iar din secolul trecut limbile română şi maghiară.</h1>
                    </div>
                </div>
                <div className="w-full h-[calc(100vw*9/16) lg:h-[400px] mt-32 flex flex-col lg:flex-row">
                    <div className="w-full lg:min-w-[650px] lg:hidden">
                        <img className="w-full h-[calc(100vw*9/16) lg:min-w-[650px] lg:h-[365px] rounded-2xl" src="/websiteUI/Colegiul_Naţional__Silvania__Zalău%20(1).jpg" alt="Poza Cladire CNS" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-6xl mr-0 lg:mr-10 font-bold text-center lg:text-right mt-5 lg:-mt-5">ARHITECTURA</h1>
                        <h1 className="text-xl mr-0 lg:mr-10 lg:text-right mt-2 text-justify">Construite practic în decurs de o jumătate de secol, cele trei clădiri istorice care sunt şi monumente de arhitectură nu prezintă un stil unitar: corpul B şi corpul C se încadrează undeva între stilul clasicist sau mai degrabă neoclasic. Această arhitectura este solemnă, dar în acelaşi timp mult mai simplă şi mai funcţională+raţională, decât barocul: Astfel toate elementele corpului clădirilor care ies oarecum în relief – rezalitele (cum se numesc în arhitectura barocului) – dispar, iar fațadele devin impresionante prin unitatea lor și prin faptul că toate elementele ce le compun vor fi absolut în linie.</h1>
                    </div>
                    <div className="w-full lg:min-w-[650px] hidden lg:block">
                        <img className="w-full h-[calc(100vw*9/16) lg:min-w-[650px] lg:h-[365px] rounded-2xl shadow-2xl" src="/websiteUI/Colegiul_Naţional__Silvania__Zalău%20(1).jpg" alt="Poza Cladire CNS" />
                    </div>

                </div>

                <Footer/>
            </PageBody>
        </div>
    );
}
