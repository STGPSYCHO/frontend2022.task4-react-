//import { useState } from "react"

import { FAQ_question } from "./FAQ_question";

export function FAQ(props) {

    return (
<div className="faq" id="faq">
<h3 className="faq-title">FAQ</h3>
<dl className="faq-page">
<FAQ_question title="Use service data to identify your most common questions ?" answer="Your FAQ page should address the most common questions customers have about your products, services, and brand as a whole. The best way to identify those questions is to tap into your customer service data and see which problems customers are consistently reaching out to you with. If you have a help desk or call center software you can easily discover the most popular questions that customers have for your team. Some ticketing systems even offer tagging features that allow agents to label individual tickets."/>
<FAQ_question title="Include space for live support options" answer="FAQ pages are intended as an initial support option for customers looking for an immediate answer to a quick question or problem. It shouldn't replace your knowledge base or your entire support team, but rather supplement your support channels as an additional, lightweight resource. When customers do have questions that extend beyond the range of your FAQ page, you should have options available that directly connect them with your support team. You could add a link that opens a new support ticket or even just list your call center's phone number at the bottom of the page."/>
<FAQ_question title="Update content and add more solutions over time." answer="As your business grows, you should update your FAQ page to include any new questions that become popular over time. For example, if you release a new product or service you'll need to update your FAQ page so that it includes troubleshooting tips for this offer as well. This shows that you take customer success seriously and that you're rolling out new products and services that your team knows how to support."/>
</dl>
</div>
    )
  }

