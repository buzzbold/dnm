<script>
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('wpformsAjaxSubmitSuccess', function (event, formData, fields, formID) {
    // Only target your "Learn More" form (replace 123 with the actual ID if needed)
    if (formID !== 123) return;

    // Extract fields (adjust field keys if needed)
    const email = fields[1]?.value || '';
    const firstName = fields[0]?.first || '';
    const lastName = fields[0]?.last || '';
    const mobile = fields[3]?.value || '';

    // Build Pardot form payload
    const formDataPardot = new FormData();
    formDataPardot.append('email', email);
    formDataPardot.append('first_name', firstName);
    formDataPardot.append('last_name', lastName);
    formDataPardot.append('mobile', mobile);

    // Send to Pardot (client-side, retains visitor tracking cookie)
    fetch('https://grow.diversenote.mobi/l/1097523/2025-04-21/9qqvtv', {
      method: 'POST',
      body: formDataPardot,
      mode: 'no-cors'
    }).then(() => {
      console.log('Pardot form handler submitted');
    }).catch((e) => {
      console.error('Pardot form handler error:', e);
    });
  });
});
</script>
