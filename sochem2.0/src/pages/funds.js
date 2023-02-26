import Titlebar from "@/components/title";
import { SectionTitle } from "@/components/section";
import Navbar from "@/components/navbar";

export default function Funds() {
    return (
        <div>
            <Navbar/>
            <div class="bg-slate-100 py-10">
            <form class="mx-20 my-10 bg-white rounded-2xl flex flex-col md:flex-row">
                <div class=" p-20 flex flex-col w-3/5">
                    <h1 class="text-3xl font-bold mb-6">Alumni Fund Form</h1>
                    <div class="pb-5 justify-between flex">
                        <label class="text-lg">Email*</label>
                        <input class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64" placeholder="abc@company.com"/>
                    </div>
                    <div class="pb-5 justify-between flex">
                        <label class="text-lg">Name* </label>
                        <input class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64" placeholder="Ethan Hunt"/>
                    </div>
                    <div class="pb-5 justify-between flex">
                        <label class="text-lg">Batch*</label>
                        <input class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64" placeholder="2000"/>
                    </div>
                    <div class="pb-5 justify-between flex">
                        <label class="text-lg">LinkedIn Profile* </label>
                        <input class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64" placeholder="http://linkedin.com/in/accountaname"/>
                    </div>
                    <div class="pb-5 justify-between flex">
                        <label class="text-lg">Contact No*</label>
                        <input class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64" placeholder="9999999999"/>
                    </div>
                    <div class="pb-5 justify-between flex">
                        <label class="text-lg">Current Company*</label>
                        <input class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64" placeholder="Apple Inc."/>
                    </div>
                    <div class="pb-10 justify-between flex">
                        <label class="text-lg">Amount* </label>
                        <input class="bg-slate-200 ring-1 rounded p-1 text-sm w-30 md:w-40 lg:w-56 xl:w-64" placeholder="50000"/>
                    </div>
                    Please fill all the fields before submitting that are marked
                    with* 

                    <button class="bg-black text-white text-xl rounded-full mt-5 py-1">SUBMIT</button>
                </div>
                <div class="flex flex-col w-2/5 py-20 mr-20 justify-between">
                    <h1 class="text-3xl font-bold mb-6">Why</h1>
                    <p class="mb-5">
                    SoChem organizes year long workshops and events for the
                    overall development of its members. Alumni Funds helps us
                    arrange events and competitions! </p>
                    <h1 class="text-3xl font-bold mb-3">Account Details </h1>
                    <img class="h-40 w-40 rounded pb-3"/>
                    <p  class="mb-10">UPI Id: 9026663689@paytm</p>
                    <h1 class="text-3xl font-bold mb-2">Contact Us:</h1>
                    abc@iitbhu.ac.in
                </div>
            </form>
            </div>

            <div>Footer</div>
        </div>
    );
}
