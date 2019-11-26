import React from "react";
import styled from "styled-components";
import { metrics } from "../themes";
import { H1, H2, P, BodyWrapper } from "../components";

const OL = styled.ol`
  font-size: ${metrics.smallText}px;
  line-height: 2;
  margin-left: ${metrics.baseUnit * 3}px;
  padding-left: 0;
  margin-bottom: ${metrics.baseUnit * 3}px;
`;

const UL = styled.ul`
  font-size: ${metrics.smallText}px;
  line-height: 2;
  margin-left: ${metrics.baseUnit * 3}px;
  padding-left: 0;
  margin-bottom: ${metrics.baseUnit * 3}px;
`;

const PrivacyPolicy = () => {
  return (
    <BodyWrapper>
      <H1>Web Site Terms and Conditions of Use</H1>
      <H2>1. Terms</H2>
      <P>
        By accessing this web site, you are agreeing to be bound by these web
        site Terms and Conditions of Use, applicable laws and regulations and
        their compliance. If you disagree with any of the stated terms and
        conditions, you are prohibited from using or accessing this site. The
        materials contained in this site are secured by relevant copyright and
        trade mark law.
      </P>
      <H2>2. Use License</H2>
      <OL type="a">
        <li>
          Permission is allowed to temporarily download one duplicate of the
          materials (data or programming) on react-firebase-essentials.com's
          site for individual and non-business use only. This is the just a
          permit of license and not an exchange of title, and under this permit
          you may not:
          <OL type="i">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial use , or for any public
              presentation (business or non-business);{" "}
            </li>
            <li>
              attempt to decompile or rebuild any product or material contained
              on react-firebase-essentials.com's site;
            </li>
            <li>
              remove any copyright or other restrictive documentations from the
              materials; or
            </li>
            <li>
              transfer the materials to someone else or even "mirror" the
              materials on other server.
            </li>
          </OL>
        </li>
        <li>
          This permit might consequently be terminated if you disregard any of
          these confinements and may be ended by react-firebase-essentials.com
          whenever deemed. After permit termination or when your viewing permit
          is terminated, you must destroy any downloaded materials in your
          ownership whether in electronic or printed form.
        </li>
      </OL>
      <H2>3. Disclaimer</H2>
      <OL type="a">
        <li>
          The materials on react-firebase-essentials.com's site are given "as
          is". react-firebase-essentials.com makes no guarantees, communicated
          or suggested, and thus renounces and nullifies every single other
          warranties, including without impediment, inferred guarantees or
          states of merchantability, fitness for a specific reason, or
          non-encroachment of licensed property or other infringement of rights.
          Further, react-firebase-essentials.com does not warrant or make any
          representations concerning the precision, likely results, or
          unwavering quality of the utilization of the materials on its Internet
          site or generally identifying with such materials or on any
          destinations connected to this website.
        </li>
      </OL>
      <H2>4. Constraints</H2>
      <P>
        In no occasion should react-firebase-essentials.com or its suppliers
        subject for any harms (counting, without constraint, harms for loss of
        information or benefit, or because of business interference,) emerging
        out of the utilization or powerlessness to utilize the materials on
        react-firebase-essentials.com's Internet webpage, regardless of the
        possibility that react-firebase-essentials.com or a
        react-firebase-essentials.com approved agent has been told orally or in
        written of the likelihood of such harm. Since a few purviews don't
        permit constraints on inferred guarantees, or impediments of obligation
        for weighty or coincidental harms, these confinements may not make a
        difference to you.
      </P>
      <H2>5. Amendments and Errata</H2>
      <P>
        The materials showing up on react-firebase-essentials.com's site could
        incorporate typographical, or photographic mistakes.
        react-firebase-essentials.com does not warrant that any of the materials
        on its site are exact, finished, or current.
        react-firebase-essentials.com may roll out improvements to the materials
        contained on its site whenever without notification.
        react-firebase-essentials.com does not, then again, make any dedication
        to update the materials.
      </P>
      <H2>6. Links</H2>
      <P>
        react-firebase-essentials.com has not checked on the majority of the
        websites or links connected to its website and is not in charge of the
        substance of any such connected webpage. The incorporation of any
        connection does not infer support by react-firebase-essentials.com of
        the site. Utilization of any such connected site is at the user's own
        risk.
      </P>
      <H2>7. Site Terms of Use Modifications</H2>
      <P>
        react-firebase-essentials.com may update these terms of utilization for
        its website whenever without notification. By utilizing this site you
        are consenting to be bound by the then current form of these Terms and
        Conditions of Use.
      </P>
      <H2>8. Governing Law</H2>
      <P>
        Any case identifying with react-firebase-essentials.com's site should be
        administered by the laws of the country of United States
        react-firebase-essentials.com State without respect to its contention of
        law provisions.
      </P>
      <P>General Terms and Conditions applicable to Use of a Web Site.</P>
      <H1>Privacy Policy</H1>
      <P>
        Your privacy is critical to us. Likewise, we have built up this Policy
        with the end goal you should see how we gather, utilize, impart and
        reveal and make utilization of individual data. The following blueprints
        our privacy policy.
      </P>
      <UL>
        <li>
          Before or at the time of collecting personal information, we will
          identify the purposes for which information is being collected.
        </li>
        <li>
          We will gather and utilization of individual data singularly with the
          target of satisfying those reasons indicated by us and for other good
          purposes, unless we get the assent of the individual concerned or as
          required by law.
        </li>
        <li>
          We will just hold individual data the length of essential for the
          satisfaction of those reasons.
        </li>
        <li>
          We will gather individual data by legal and reasonable means and,
          where fitting, with the information or assent of the individual
          concerned.
        </li>
        <li>
          Personal information ought to be important to the reasons for which it
          is to be utilized, and, to the degree essential for those reasons,
          ought to be exact, finished, and updated.
        </li>
        <li>
          We will protect individual data by security shields against misfortune
          or burglary, and also unapproved access, divulgence, duplicating, use
          or alteration.
        </li>
        <li>
          We will promptly provide customers with access to our policies and
          procedures for the administration of individual data.
        </li>
      </UL>
      <P>
        We are focused on leading our business as per these standards with a
        specific end goal to guarantee that the privacy of individual data is
        secure and maintained.
      </P>
    </BodyWrapper>
  );
};

export default PrivacyPolicy;
