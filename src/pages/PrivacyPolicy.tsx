import React from "react";
import { Divider } from "antd";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="policy-container">
      <div style={{ minHeight: "150px" }} />
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1>Privacy Policy</h1>
        <Divider style={{ backgroundColor: "rgb(0, 234, 255)" }} />
        <h2>ProChat App Policy</h2>
        <div style={{ textAlign: "left" }}>
          <h3>
            The ProChat app respects ALL your data and privacy. We only collect
            data required for the use of the app and validation of a paid
            license. ProChat will NEVER sell user data.
          </h3>
          <h2>The only data we collect</h2>
          <h3>
            The ProChat app only collects data required for the use of the
            application and validation of a paid license.
          </h3>
          <li>
            When you purchase a license your email address is collected only to
            send you your key on purchase or if you lose it in the future.
          </li>
          <li>
            When you activate a license, we collect and save your device's name
            and hardware ID as a unique identifier for that license.
          </li>
          <li>Neither of these are shared with third-parties.</li>
        </div>
        <h2>ProChat Website Policy</h2>
        <div>
          <h3>
            It is ProChat.com's policy to respect your privacy regarding any
            information we may collect from you across our website, ProChat.com,
            and other sites we own and operate. We only ask for personal
            information when we truly need it to provide a service to you. We
            collect it by fair and lawful means, with your knowledge and
            consent. We also let you know why we're collecting it and how it
            will be used. We only retain collected information for as long as
            necessary to provide you with your requested service. What data we
            store, we'll protect within commercially acceptable means to prevent
            loss and theft, as well as unauthorised access, disclosure, copying,
            use or modification. We don't share any personally identifying
            information publicly or with third-parties, except when required to
            by law. Our website may link to external sites that are not operated
            by us. Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies. You are free to
            refuse our request for your personal information, with the
            understanding that we may be unable to provide you with some of your
            desired services. Your continued use of our website will be regarded
            as acceptance of our practices around privacy and personal
            information. If you have any questions about how we handle user data
            and personal information, feel free to contact us. This policy is
            effective as of 30 Jan 2023.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
