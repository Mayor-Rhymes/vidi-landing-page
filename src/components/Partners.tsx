import Image from "next/image";
import unitedNations from "/public/images/logos-partners/united-nations.png";
import unicef from "/public/images/logos-partners/unicef.png";
import iiu from "/public/images/logos-partners/iiu.png"
import womenAffairs from "/public/images/logos-partners/women-affairs-ministry.png"
import govAbia from "/public/images/logos-partners/gov-abia.png";
import ndi from "/public/images/logos-partners/ndi.png";
import nactal from "/public/images/logos-partners/nactal.png";
import { Button } from "./ui/button";


export default function Partners() {

    return (
        <div className="flex flex-col space-y-8 py-6 pb-16">
            <h3 className="uppercase text-center font-semibold text-3xl">Our Partners</h3>

            <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center justify-center border-2 border-yellow-400 p-10">
                  <Image src={unitedNations} alt="united nations" />
                </div>
                <div className="flex items-center justify-center border-2 border-yellow-400 p-10">
                  <Image src={unicef} alt="unicef" />
                </div>
                <div className="flex items-center justify-center border-2 border-yellow-400 p-10">
                  <Image src={iiu} alt="iiu" />
                </div>
                <div className="flex items-center justify-center border-2 border-yellow-400 p-10">
                  <Image src={womenAffairs} alt="women affairs ministry" />
                </div>
                <div className="flex items-center justify-center border-2 border-yellow-400 p-10">
                  <Image src={govAbia} alt="abia state government" />
                </div>
                <div className="flex items-center justify-center border-2 border-yellow-400 p-10">
                  <Image src={ndi} alt="ndi" />
                </div>
                <div className="flex items-center justify-center border-2 border-yellow-400 p-10">
                  <Image src={nactal} alt="nactal" />
                </div>
            </div>

            <Button variant="destructive" className="self-center" size="lg">
                <span className="text-lg font-semibold">Partner with Us</span>
            </Button>
        </div>
    )
}