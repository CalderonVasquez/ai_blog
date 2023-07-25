import React from 'react';

const MailchimpSubscribeForm: React.FC = () => {
  return (
    <div id="mc_embed_shell">
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      />
      <style>
        {`
        #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%; padding: 16px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        `}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=1f1c3d69480d3630dc1580d9c&amp;id=e94fa6785a&amp;f_id=009f59e6f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                defaultValue=""
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: 'none' }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: 'none' }}
              ></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_1f1c3d69480d3630dc1580d9c_e94fa6785a"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button bg-slate-600 text-white rounded hover:bg-slate-700 w-full"
                  value="Subscribe"
                />
                <p className="brandingLogo text-center mt-4">
                  <a
                    href="http://eepurl.com/hSyqi9"
                    title="Mailchimp - email marketing made easy and fun"
                    target="_blank" // Add target="_blank" to open the link in a new tab
                    rel="noopener noreferrer" // For security and performance reasons
                  >
                    <img
                      src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                      alt="referral badge"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='merge';fnames[4]='MMERGE4';ftypes[4]='merge';fnames[5]='MMERGE5';ftypes[5]='merge';}(jQuery));var $mcj = jQuery.noConflict(true);`,
        }}
      />
    </div>
  );
};

export default MailchimpSubscribeForm;
