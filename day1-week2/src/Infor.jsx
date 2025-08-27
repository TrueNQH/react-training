function Info({ label, value }) {
  return (
    <div style={styles.info}>
      <div style={styles.infoLabel}>{label}</div>
      <div style={styles.infoValue}>{value}</div>
    </div>
  );
}