const StatusBlock1 = () => {
  return (
    <div class="status-block">
      <div class="server">
        <div class="flex-s-c">
          <span class="server-name">SERVER NAME</span> <span class="status-online">Online:</span>
        </div>
        <div class="progress-bar">
          <span style={{ width: "70%" }}></span>
        </div>
        <a href="/todo" class="desc">
          Server Description
        </a>{" "}
        <span class="status-online">3546</span>
      </div>
    </div>
  );
};

export default StatusBlock1;
