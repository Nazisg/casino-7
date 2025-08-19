export default function TermsAndConditions() {
  return (
    <section id="terms" className="px-4 py-7 lg:py-12">
      <div className="max-w-7xl mx-auto flex flex-col">
        <p className="font-bold text-[24px] text-center lg:text-[48px] glow-text">Terms & Conditions</p>
        <h2 className="opacity-60 mb-3 text-center mb-8">
          The rules and guidelines that govern your use of Casino
        </h2>

        <ol className="list-decimal list-inside space-y-6 text-gray-200">
          <li>
            <span>Agreement to Terms</span>
            <p>These Terms and Conditions ("Terms") form a legal agreement between you and Top10CasinoUK Casino Limited ("Company", "we", "our", or "us") regarding the use of our website and services.</p>
            <p>By using our website or services, you confirm that you have read and accepted these Terms. If you disagree, please do not access or use our services.</p>
          </li>

          <li>
            <span>Eligibility</span>
            <p>To access our services, you must:</p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>Be 18 years or older</li>
              <li>Reside in the United Kingdom</li>
              <li>Have legal capacity to enter agreements</li>
              <li>Not be self-excluded from gambling</li>
              <li>Not be legally prohibited from gambling</li>
              <li>Provide accurate registration information</li>
            </ul>
            We may verify eligibility at any time, and failure to meet these criteria may result in account suspension or termination.
          </li>

          <li>
            <span>Account Registration</span>
            <p>Registration Requirements</p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>Only one account per user is allowed</li>
              <li>All details must be accurate and current</li>
              <li>Identity verification is required before withdrawals</li>
              <li>Users are responsible for account security</li>
            </ul>
            <p>Account Security</p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>Keep login credentials private</li>
              <li>Report unauthorized access immediately</li>
              <li>Use strong passwords and enable 2FA</li>
              <li>Log out on shared devices</li>
            </ul>
          </li>

          <li>
            <span>Deposits and Withdrawals</span>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <span>Deposits:</span>
              <li>Minimum and maximum deposit limits may apply</li>
              <li>Deposits are usually processed instantly</li>
              <li>Only use payment methods in your own name</li>
              <li>We may decline certain deposits at our discretion</li>

              <span>Withdrawals:</span>
              <li>Identity verification required before first withdrawal</li>
              <li>Withdrawals usually processed within 24-48 hours</li>
              <li>Minimum withdrawal limits apply</li>
              <li>Withdrawals must go to the same method used for deposits</li>
            </ul>
          </li>

          <li>
            <span>Gaming Rules</span>
            <p>General Guidelines</p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>All games follow their specific rules and paytables</li>
              <li>Game outcomes are determined by certified RNGs</li>
              <li>Bets cannot be cancelled once placed</li>
              <li>Technical issues void affected bets</li>
              <li>We may limit bet amounts</li>
            </ul>
            <p>Prohibited Actions</p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>Exploiting bonuses with betting systems</li>
              <li>Colluding with other players</li>
              <li>Using automated software or bots</li>
              <li>Manipulating game outcomes</li>
              <li>Money laundering or illegal acts</li>
            </ul>
          </li>

          <li>
            <span>Bonuses and Promotions</span>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>All bonuses have specific terms</li>
              <li>Wagering requirements must be met before cashout</li>
              <li>Bonuses may have time limits or restrictions</li>
              <li>Promotions may be modified or cancelled</li>
              <li>Abuse may result in loss of bonus and account closure</li>
              <li>Only one bonus per player, household, or IP</li>
            </ul>
          </li>

          <li>
            <span>Responsible Gaming</span>
            <p>We promote safe gaming:</p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>Set deposit, loss, and session limits</li>
              <li>Take cooling-off periods or self-exclude</li>
              <li>Use reality checks and timers</li>
              <li>Seek support from GamCare or BeGambleAware</li>
              <li>Contact support for help</li>
            </ul>
            <p>If gambling stops being enjoyable, take a break.</p>
            <p>For support, visit <a href="https://www.gambleaware.org/" className="underline">BeGambleAware.org</a></p>
          </li>

          <li>
            <span>Privacy and Data Protection</span>
            <p>Your privacy is important. Our Privacy Policy governs data collection, use, and protection, and is part of these Terms.</p>
            <p>By using our services, you consent to processing personal data as described in our Privacy Policy and UK Gambling Commission requirements.</p>
          </li>

          <li>
            <span>Limitation of Liability</span>
            <p>To the maximum extent allowed by law:</p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>No warranties, express or implied</li>
              <li>Liability limited to deposited funds</li>
              <li>Not liable for indirect or punitive damages</li>
              <li>Technical failures do not create liability</li>
              <li>Use services at your own risk</li>
            </ul>
          </li>

          <li>
            <span>Account Termination</span>
            <p>We may suspend or close your account if:</p>
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>Terms or policies are breached</li>
              <li>Fraudulent or illegal activity is suspected</li>
              <li>Required by law or regulators</li>
              <li>Business or operational reasons</li>
            </ul>
            <p>Any remaining balance will be returned according to verification procedures and applicable law.</p>
          </li>

          <li>
            <span>Governing Law</span>
            <p>These Terms are governed by the laws of England and Wales. Any disputes are subject to the exclusive jurisdiction of courts in England and Wales.</p>
          </li>

          <li>
            <span>Changes to Terms</span>
            <p>We may update these Terms at any time. Updates take effect once posted. Continued use means acceptance of changes.</p>
            <p>Material changes may be notified via email or website notice.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
