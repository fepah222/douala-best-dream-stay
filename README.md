Douala Best Dream Stay
A website presenting furnished accommodation options in Douala,
Cameroon. The published website is currently available at:
Live website: https://douala-best-dream-stay.lovable.app/
This README is a handover guide for the next developer. It records the
known project purpose and visible features while marking technical
details that must be verified from the actual source code.
1. Project purpose
Douala Best Dream Stay helps visitors discover accommodation at two
locations in Douala and contact the property team to ask questions or
enquire about a stay.
The website should make it easy for visitors to: - Understand the
accommodation options at each location. - Browse property photos,
amenities, and guest policies. - Find contact details and request
information. - Use the website in English or French.
2. Locations presented on the website
Bépanda Guest House
- Area/reference: Clinique Etienno, Bépanda, Douala.
- Advertised accommodation: two furnished studios.
Bonamoussadi Guest House
- Area/reference: Santa Barbara, Bonamoussadi, Douala.
- Advertised accommodation: 14 studios, three apartments, and a
  conference hall.
Important: Confirm all property descriptions, quantities, amenities,
prices, policies, and photos with the property owner before publishing
or changing them. Do not invent availability, prices, or booking
confirmations.
3. Existing visible features
The published website has included: - A homepage that introduces the
accommodation options. - Dedicated pages/sections for Bépanda and
Bonamoussadi. - Property image galleries. - Accommodation descriptions
and amenities. - Guest policies and check-in/check-out information. -
English/French language controls. - Contact options including phone,
email, and WhatsApp. - Links to TikTok property tours. - Responsive
navigation and page layout.
Treat these as existing features to preserve. Verify each one in the
current source code and on the live site before editing; do not assume
every link or interaction is working.
4. Project technology and source of truth
The site was created with Lovable. The exact framework, package
versions, folder structure, and available scripts have not yet been
verified in this handover document.
Before making technical changes: 1. Open the project repository in
GitHub. 2. Inspect package.json to identify the framework,
dependencies, and scripts. 3. Inspect the repository structure and
project instructions. 4. Confirm how the current version is deployed. 5.
Use the existing project architecture rather than rebuilding the website
from scratch.
Do not assume this is a plain HTML project. Do not replace the existing
application with a new template.
5. Running the project locally in VS Code
These instructions apply once the complete repository has been connected
to GitHub and cloned to the computer.
1. Install Git and the runtime required by the project, as indicated by
   the repository documentation and configuration.
2. Open VS Code.
3. Select File → Open Folder and open the project root (the folder
   containing package.json, if present).
4. Open the integrated terminal from Terminal → New Terminal.
5. Read package.json and identify the project's package manager and
   available scripts.
6. Install dependencies using the package manager and lockfile already
   used by the repository.
7. Run the existing development script shown in package.json.
8. Open the local URL printed by the development server in the
   terminal.
For example, if the project is confirmed to use npm and package.json
contains a dev script, the usual commands are:
npm install
npm run dev
Do not run these example commands blindly if the project uses a
different package manager or scripts.
If the local page looks incomplete or different
Check the following before changing the design: - Did you clone the
complete repository? - Are dependencies installed successfully? - Did
you start the project using its documented development command? - Are
there errors in the terminal or browser developer console? - Are images,
fonts, CSS files, and other assets present at the expected paths? - Are
required environment variables documented by the project? - Is the local
branch up to date with the intended version?
Do not fix a visual issue by deleting components or replacing the design
before finding its cause.
6. GitHub and Lovable workflow
GitHub stores and versions the source code. VS Code is used to edit and
run the local copy. Lovable can be used to continue AI-assisted
development when its project/GitHub integration is configured.
Recommended workflow: 1. Confirm the current GitHub repository and
default branch. 2. Check the working tree before editing or pulling
changes. 3. Make one focused change at a time. 4. Test the change
locally. 5. Review the diff before committing. 6. Commit with a clear
message and push to the intended branch. 7. Confirm how the live site is
deployed before expecting a push to update production.
Avoid editing the same files in Lovable and locally at the same time
without syncing. This can cause conflicting changes or accidental
overwrites.
7. Hosting and custom domain
Current published URL: https://douala-best-dream-stay.lovable.app/
A custom domain has not been confirmed as purchased or connected.
Before connecting a domain: 1. Confirm the chosen hosting provider. 2.
Confirm that the site builds and runs correctly from the repository. 3.
Follow the host's current custom-domain instructions. 4. Configure only
the DNS records provided by that host. 5. Wait for DNS and HTTPS
certificate provisioning. 6. Test the root domain and www version, if
both are configured. 7. Verify that all pages, assets, contact links,
and language controls work on the production domain.
Do not change DNS records based on guesses. Keep access to the domain
registrar and hosting account with the authorized owner.
8. Priority improvement: booking enquiries
A useful next improvement is a clear booking enquiry form, provided the
current site does not already have an adequate one.
Potential fields: - Property/location selection. - Check-in and
check-out dates. - Number of guests. - Guest name. - Phone number or
preferred contact method. - Optional message.
Requirements: - Validate required fields. - Ensure the check-out date is
after the check-in date. - Make it clear that an enquiry is not a
confirmed reservation. - Ensure submissions are actually delivered to an
authorized property contact. - Do not show a success message that
implies delivery unless the chosen submission method confirms it. - Do
not invent prices, room availability, or cancellation terms. - Do not
add online payments or a database without an agreed requirement and
implementation plan.
9. Quality assurance checklist
Before releasing a change, test:
- [ ] Homepage and both property pages load.
- [ ] Navigation and back/forward browser navigation work.
- [ ] English/French controls work and text is translated
  appropriately.
- [ ] Property galleries and images load.
- [ ] Phone, email, WhatsApp, and TikTok links point to the correct
  destinations.
- [ ] Guest policies and check-in/check-out details are accurate.
- [ ] Layout works on a desktop, tablet, and mobile-sized screen.
- [ ] No obvious horizontal overflow or broken layout.
- [ ] No critical errors appear in the terminal or browser console.
- [ ] Forms validate inputs and deliver enquiries to the intended
  recipient.
- [ ] SEO titles, descriptions, and social sharing metadata are
  appropriate.
- [ ] Production deployment reflects the intended commit and works on
  the public URL.
10. Content, privacy, and security
- Obtain permission before publishing guest reviews, guest photos, or
  personal information.
- Do not commit passwords, API keys, private tokens, or secret
  environment files to GitHub.
- Keep any required secrets in the hosting provider's
  environment-variable settings.
- Verify contact details and property claims with the owner.
- Do not expose guest enquiry information publicly.
- Use only authorized access to the repository, domain registrar, and
  hosting account.
11. Handover notes for the next developer
The following items still need to be filled in after checking the real
project and accounts:
- GitHub repository URL: Not recorded yet
- Framework and version: Verify from the repository
- Package manager: Verify from lockfile
- Local development command: Verify from package.json
- Production hosting provider: Confirm
- Domain registrar and custom domain: Confirm
- Deployment branch/build settings: Confirm
- Enquiry delivery method and recipient: Confirm
- Environment variables required: Verify and document names only;
  never publish secret values
- Project owner/contact for approvals: Confirm with the authorized
  owner
12. Working principle
Preserve what works. Inspect before changing. Make small changes. Test
locally. Review the diff. Deploy only after verification.
The goal is to improve the existing Douala Best Dream Stay website
without losing its design, content, or working features.
